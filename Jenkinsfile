pipeline {
    agent any 
    
    stages { 
        stage('Checkout') {
            steps {
                retry(3) {
                     git branch: 'main', url: 'https://github.com/HashiniPrabuddhika/4116-Prabuddhika-R.P.H'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t prabuddhika/pipline-nodejs:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerhubpassword-test', variable: 'dockerhub-test')]) {
                    script {
                        bat "docker login -u prabuddhika -p ${dockerhub-test}"

                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push prabuddhika/pipline-nodejs:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}