pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Récupération du code source depuis GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installation des dépendances npm...'
                sh 'npm install'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                echo 'Exécution du déploiement Ansible...'
                // Assure-toi que le chemin vers ton playbook correspond à ton organisation
                sh 'sudo ansible-playbook ansible/playbook.yml'
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
