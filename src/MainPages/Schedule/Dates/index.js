import React from 'react'; 




const Dates = (props) => {

	return (
		<div className="calendar">
			<h2 id="calendar-title"> FEB 2019 </h2>
			<div className="week"> 
				<span> </span>
				<span> </span>
				<span> </span>
				<span> </span>
				<span> </span>
				<span> 1</span>
				<span> 2</span>
			</div>
			<div className="week"> 
				<span> 3</span>
				<span> 4</span>
				<span> 5</span>
				<span> 6</span>
				<span className="special-date"> 7
					<div className="eventdate"> 8:00pm EST </div>
					<div className="eventtime"> Teams 2 vs 4 </div>
	    		</span>
				<span> 8</span>
				<span>9 </span>
			</div>
			<div className="week"> 
				<span className="special-date"> 10
					<div className="eventdate"> 9:00pm EST </div>
					<div className="eventtime"> Teams 6 vs 4 </div>
	    		</span>
				<span> 11</span>
				<span> 12</span>
				<span> 13</span>
				<span> 14</span>
				<span> 15</span>
				<span> 16</span>
			</div>
			<div className="week"> 
				<span> 17</span>
				<span> 18</span>
				<span> 19</span>
				<span> 20</span>
				<span> 21</span>
				<span> 22</span>
				<span> 23</span>
			</div>
			<div className="week"> 
				<span> 24</span>
				<span> 25</span>
				<span> 26</span>
				<span> 27</span>
				<span> 28</span>
				<span> </span>
				<span> </span>
			</div>
		</div>
		)
};

export default Dates;