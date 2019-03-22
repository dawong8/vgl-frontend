import React, {Component} from 'react'; 
import NavBar from '../../NavBar';

class Home extends Component {
  render() {
    return (
      <div className="container">
      	<NavBar />
      	<div className="front"> </div>
      	<section>
	        <div className="title"> 
	        	- About -
	        </div>
	        <p> 
	        	The league will be built around a Draft pick style. What this means is, each team will have a team captain. This team captain will be tasked with selecting his players, by turn, out of a "Free Agent" pool. All team captains of every team in the league, will select their team this way, much like a pro sports league. We are hoping to do things a little differently here. Instead of all our teams having the very best players we can find, vs the very best players, we want teams built of players from every caliber, working together, to become champions of this League. To apply to join this league, please send an email, by clicking the VGL dropdown at the top!
	        </p>
        </section> 
        <section> 

        	<div className="title"> 

	        	- Top Players -
	        </div>
	        <div className="imgrow"> 
	        	<div>
	        		<a className="champ" href="http://na.op.gg/summoner/userName=sin+incarnate"> <img src="https://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/Ornn.png" alt="Sin" /></a>
	        		<h3> Sin Incarnate </h3>
	        		<h4 className="plat">⬦ PLAT 4 ⬦</h4>

	        	</div> 
	        	<div> 
	        		<a className="champ" href="http://na.op.gg/summoner/userName=Leesin+Incarnate"> <img src="https://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/LeeSin.png" alt="Leesin Incarnate"/></a>
	        		<h3> Leesin Incarnate </h3>
	        		<h4 className="diamond">⬦ DIAMOND 4 ⬦</h4>

	        	</div>
	        	<div> 
	        		<a className="champ" href="http://na.op.gg/summoner/userName=Xatuo"> <img src="https://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/Zed.png" alt="Xatuo"/></a>
	        		<h3> Xatuo </h3>
	        		<h4 className="plat">⟡ PLAT 4 ⟡</h4>

	        	</div>
	        	<div>
	        		<a className="champ" href="http://na.op.gg/summoner/userName=trueanxiety"> <img src="https://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/Vayne.png" alt="Plezzy Reformed" /></a>
	        		<h3> Plezzy </h3>
	        		<h4 className="diamond">⬦ DIAMOND 2 ⬦</h4>

	        	</div>
	        	<div>
	        		<a className="champ" href="http://na.op.gg/summoner/userName=WhaddupJohn"> <img src="https://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/Taric.png" alt="john" /></a>
	        		<h3> WHADDUPJOHN</h3>
	        		<h4 className="plat">⟡ PLAT 4 ⟡</h4>

	        	</div>
	        </div> 

        </section>
      </div>
    );
  }
}

export default Home;
