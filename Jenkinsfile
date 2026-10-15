
pipeline {
    agent any

    environment {
        APP_IMAGE = 'shuvajit04/heshel-ghor-bengali-cuisine'
        TEST_CONTAINER = 'heshel-ghor-smoke-test'
        DEPLOY_CONTAINER = 'heshel-ghor-cicd'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub'
                checkout scm
                sh 'ls -la'
            }
        }

        stage('Validate') {
            steps {
                echo 'Validating project files'

                sh '''
                    set -eu
                    test -f Dockerfile
                    test -f backend/server.js
                    test -d frontend
                    echo "Project file validation passed"
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image'

                sh '''
                    set -eu

                    docker build \
                      -t ${APP_IMAGE}:${BUILD_NUMBER} \
                      -t ${APP_IMAGE}:latest .

                    echo "Docker image built successfully"
                '''
            }
        }

        stage('Node.js Syntax Check') {
            steps {
                echo 'Checking backend JavaScript syntax'

                sh '''
                    set -eu
                    docker run --rm \
                      ${APP_IMAGE}:${BUILD_NUMBER} \
                      node --check backend/server.js
                '''
            }
        }

        stage('Smoke Test') {
            steps {
                echo 'Testing application inside a temporary container'

                sh '''
                    set -eu

                    docker rm -f ${TEST_CONTAINER} 2>/dev/null || true

                    docker run -d \
                      --name ${TEST_CONTAINER} \
                      ${APP_IMAGE}:${BUILD_NUMBER}

                    sleep 5

                    docker exec ${TEST_CONTAINER} node -e "
                      fetch('http://127.0.0.1:3000')
                        .then(async r => {
                          console.log('HTTP status:', r.status);
                          if (!r.ok) {
                            console.error(await r.text());
                            process.exitCode = 1;
                          }
                        })
                        .catch(e => {
                          console.error(e);
                          process.exitCode = 1;
                        });
                    "
                '''
            }
            post {
                always {
                    sh 'docker rm -f heshel-ghor-smoke-test 2>/dev/null || true'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                echo 'Logging in and pushing image to Docker Hub'

                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-creds',
                        usernameVariable: 'DOCKERHUB_USER',
                        passwordVariable: 'DOCKERHUB_TOKEN'
                    )
                ]) {
                    sh '''
                        set -eu

                        echo "$DOCKERHUB_TOKEN" | docker login \
                          --username "$DOCKERHUB_USER" \
                          --password-stdin

                        docker push ${APP_IMAGE}:${BUILD_NUMBER}
                        docker push ${APP_IMAGE}:latest

                        docker logout
                    '''
                }
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deploying application on host port 3001'

                sh '''
                    set -eu

                    docker rm -f ${DEPLOY_CONTAINER} 2>/dev/null || true

                    docker run -d \
                      --name ${DEPLOY_CONTAINER} \
                      --restart unless-stopped \
                      -p 3001:3000 \
                      ${APP_IMAGE}:${BUILD_NUMBER}

                    sleep 5

                    docker exec ${DEPLOY_CONTAINER} node -e "
                      fetch('http://127.0.0.1:3000')
                        .then(async r => {
                          console.log('Deployment HTTP status:', r.status);
                          if (!r.ok) {
                            console.error(await r.text());
                            process.exitCode = 1;
                          }
                        })
                        .catch(e => {
                          console.error(e);
                          process.exitCode = 1;
                        });
                    "
                '''
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: CI/CD pipeline completed!'
            echo 'Application deployment port: 3001'
        }

        failure {
            echo 'FAILED: Check the stage Console Output.'
        }

        always {
            echo 'Pipeline execution finished.'
        }
    }
}

