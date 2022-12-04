pipeline {
	agent any
  
	stages {
		stage("Deploy frontend"){

			steps {
				sh "sudo systemctl restart starfinder-frontend.service"
			} 	
	   }
	}
}
