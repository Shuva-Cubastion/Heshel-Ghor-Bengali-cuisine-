pipeline {
    agent any

    environment {
        APP_IMAGE = 'shuvajit04/heshel-ghor-bengali-cuisine'
        TEST_CONTAINER = 'heshel-ghor-smoke-test'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out project source code'
                checkout scm
                sh 'ls -la'
            }
        }

        stage('Validate') {
            steps {
                echo 'Validating project files'
                sh '''
                    test -f Dockerfile
                    test -f backend/server.js
                    test -d frontend
                    node --check backend/server.js
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build \
                      -t ${APP_IMAGE}:${BUILD_NUMBER} \
                      -t ${APP_IMAGE}:latest .
                '''
            }
        }

        stage('Smoke Test') {
            steps {
                sh '''
                    docker rm -f ${TEST_CONTAINER} 2>/dev/null || true

                    docker run -d \
                      --name ${TEST_CONTAINER} \
                      ${APP_IMAGE}:${BUILD_NUMBER}

                    sleep 5

                    docker exec ${TEST_CONTAINER} node -e "
                      fetch('http://127.0.0.1:3000')
                        .then(r => {
                          console.log('HTTP status:', r.status);
                          if (!r.ok) process.exitCode = 1;
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
    }

    post {
        success {
            echo 'CI pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed. Check the stage console output.'
        }
    }
}
