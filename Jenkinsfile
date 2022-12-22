pipeline {
	agent any
	
	stages {
		// This is to test the app.
		// This breaks the pipeline should there be any error in a new merge
		// while maintaining a stable app in a successful previuos build.
	
		stage("Check Frontend Service"){
			steps{
				dir('vipcustomer.web/') {
					sh "npm install"
					sh "npm start&"
				}
			}
		}

		stage("Deploy frontend"){
			steps {
				sh "sudo systemctl restart starfinder-frontend.service"
				} 
			}
		}
	
    post{
		// This sends an email, should there be any error in the build
        failure{
            emailext attachLog: true, 
            to: 'gideonbusayo@gmail.com',
            subject: '${BUILD_TAG} Build failed',
            body: '${BUILD_TAG} Build Failed \nMore Info can be found here: ${BUILD_URL} or in the log file below'
        }
    }
}
