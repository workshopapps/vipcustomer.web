import React from 'react';
import pd from './pd.png';
import pm from './pm.png';
import backend from './backend.png';
import frontend from './frontend.png';
import devops from './devops.png';
import './Team.css';

export default function Team() {
    return (
        <main className="main">
            <section className="meet-the-team">
                <h1>Meet The Team</h1>
                <p>Get to know the face behind the product.</p>
                <div className="theTeam">
                    <div className="team-lead pm-lead">
                        <img className="lead-img pm-img" src={pm} alt="" />
                        <h4 className="lead-name pm-name">Irouma Valerie Oby-Ezeani</h4>
                        <p className="lead-track pm-track">Product Manager</p>
                    </div>

                    <div className="team-lead pd-lead">
                        <img className="lead-img pd-img" src={pd} alt="" />
                        <h4 className="lead-name pd-name">Irouma Valerie Oby-Ezeani</h4>
                        <p className="lead-track pd-track">Product Designer</p>
                    </div>

                    <div className="team-lead backend-lead">
                        <img className="lead-img backend-img" src={backend} alt="" />
                        <h4 className="lead-name backend-name">Andrew Glado</h4>
                        <p className="lead-track backend-track">Back-End Lead</p>
                    </div>

                    <div className="team-lead frontend-lead">
                        <img className="lead-img frontend-img" src={frontend} alt="" />
                        <h4 className="lead-name frontend-name">Alex Chika</h4>
                        <p className="lead-track frontend-track">Front-End Lead</p>
                    </div>

                    <div className="team-lead devops-lead">
                        <img className="lead-img devops-img" src={devops} alt="" />
                        <h4 className="lead-name devops-name">Busayo Olushola</h4>
                        <p className="lead-track devops-track">DevOps Lead</p>
                    </div>
                </div>
            </section>
        </main>
    );
}