import React from 'react';
import ReactDOM from 'react-dom';


var d = new Date();
var n = d.getFullYear();


function Footer() {
	return <footer>
		<p className="footer"> copyright {n} </p>;
	</footer>
}

export default Footer;