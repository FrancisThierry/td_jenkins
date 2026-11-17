pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du code source depuis GitHub...'
                checkout scm
            }
        }

        
        
        stage('Deploy with Ansible') {
            steps {
                echo 'Exécution du déploiement Ansible...'
                sh 'sudo /usr/bin/ansible-playbook ${WORKSPACE}/ansible/playbook.yml'
            }
        }
    }

    post {
        success {
            echo 'Pipeline exécuté avec succès !'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
    }
}