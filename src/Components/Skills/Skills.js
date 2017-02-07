import React, { Component } from 'react';
import Icon from '../Icon/Icon';

var iconArray = [];

const html5 = <img src={require('./images/html5.svg')} alt='Please let me know!' />;
const apache = <img src={require('./images/apache.svg')} alt='Please let me know!' />;
const aws = <img src={require('./images/aws.svg')} alt='Please let me know!' />;
const babel = <img src={require('./images/babel.svg')} alt='Please let me know!' />;
const bootstrap = <img src={require('./images/bootstrap.svg')} alt='Please let me know!' />;
const github = <img src={require('./images/github.svg')} alt='Please let me know!' />;
const jquery = <img src={require('./images/jquery.svg')} alt='Please let me know!' />;
const js = <img src={require('./images/js.svg')} alt='Please let me know!' />;
const linux = <img src={require('./images/linux.svg')} alt='Please let me know!' />;
const react = <img src={require('./images/react.svg')} alt='Please let me know!' />;
const sass = <img src={require('./images/sass.svg')} alt='Please let me know!' />;
const sourcetree = <img src={require('./images/sourcetree.svg')} alt='Please let me know!' />;
const ubuntu = <img src={require('./images/ubuntu.svg')} alt='Please let me know!' />;

iconArray.push(apache);
iconArray.push(html5);
iconArray.push(aws);
iconArray.push(babel);
iconArray.push(bootstrap);
iconArray.push(github);
iconArray.push(jquery);
iconArray.push(js);
iconArray.push(linux);
iconArray.push(react);
iconArray.push(sass);
iconArray.push(sourcetree);
iconArray.push(ubuntu);



class Skills extends Component{
	render(){
		return(
			<div className="icon-wrapper col-sm-4">
				{iconArray.map((currentIcon, index)=>{
					return <Icon singleImage={currentIcon} key={index} />
				})}
		
			</div>
		)
	}
}


export default Skills;
