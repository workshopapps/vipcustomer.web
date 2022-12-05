pipeline {
	agent any
  
	stages {
		stage("Deploy frontend"){

			steps {
				sh "cd /home/busganda/vipcustomer.web && git pull"
				sh "sudo systemctl restart starfinder-frontend.service"
			} 	
	   }
	}
}
