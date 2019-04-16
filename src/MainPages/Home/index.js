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

	        <div className="imgrow"> 
	        	<div>
	        		<a className="champ" href="/team/5c98fa92def2ea0017d3a0ea"> <img src="https://3.bp.blogspot.com/-aD-96vjkcno/WG6o0yRFlYI/AAAAAAABA3g/3MJik7Rx0rA3fA8LDyflYwftScU1S8ojgCLcB/s1600/Lucian_7.jpg" alt="luc" /></a>
	        		<div className="team-name"> 
		        		<h3> Banana Peels </h3>		        		
	        		</div>
	        	</div> 
	        	<div> 
	        		<a className="champ" href="/team/5c98fa33def2ea0017d3a0e8"> <img src="https://lolskinshop.com/wp-content/uploads/2018/08/LeeSin_11.jpg" alt="Leesin Incarnate"/></a>
	        		<div className="team-name"> 
		        		<h3> Skinny Penis & The Scallywags </h3>
	        		</div>
	        	</div>
	        	<div> 
	        		<a className="champ" href="/team/5c98fb32def2ea0017d3a0ec"> <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/6b/Kayn_0.jpg?version=f8b64c5028ede48cdff98a774c0a0c86" alt="kayn"/></a>
					<div className="team-name"> 
		        		<h3> Jungle is Ruined</h3>
	        		</div>
	        	</div>
	        	<div> 
	        		<a className="champ" href="/team/5c98faafdef2ea0017d3a0eb"> <img src="https://lolskinshop.com/wp-content/uploads/2015/05/battle-regalia-poppy-loading.jpg" alt="poppy"/></a>
	        		<div className="team-name"> 
		        		<h3> Blake's Bitches ft. Drek</h3>
	        		</div>
	        	</div>
	        	<div>
	        		<a className="champ" href="/team/5c476a959f3fdb0017f1b8b2"> <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/3/37/Sejuani_0.jpg" alt="sej" /></a>
	        		<div className="team-name"> 
		        		<h3> Marauder Esports</h3>
	        		</div>
	        	</div>
	        	<div>
	        		<a className="champ" href="/team/5c98fa89def2ea0017d3a0e9"> <img src="https://i.pinimg.com/originals/e4/bb/5c/e4bb5cf2366df3fb2b2615124c35a5de.jpg" alt="sej" /></a>
	        		<div className="team-name"> 
		        		<h3> Ayayas </h3>
	        		</div>
	        	</div>
	        	
	        </div> 

        </section>
      </div>
    );
  }
}

export default Home;
