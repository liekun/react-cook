// ------------------------------------------------------------------------------
//
// Classification
// class: Classification
// author: gang( h5devs.com/h5devs.net )
// created: 2017/7/20
// copyright (c) 2015 gang( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link } from "react-router-dom";
import { getImgUrl } from "../conf/conf";

interface IClassification
{
	data?:any;
	table?:{ striped?:boolean };
}
export default class Classification extends React.Component<any, any>
{
	public static defaultProps = {
		data: [
			{
				imger: 'home1.png',
				header: 'header-first.png',
				name: '米其林三星',
				id: '1',
				score: 3,
				signature: '作为饲养员，很高兴与你分享美食。',
				praise: '18.5K'
			}
			,
			{
				imger: 'home2.png',
				header: 'header-two.fw.png',
				name: '我是一个饲养员',
				id: '2',
				score: 5,
				signature: '我的菜不怕你不爱，只怕你更爱！！！',
				praise: '23.5K'
			},
			{
				imger: 'home3.png',
				header: 'header-three.png',
				name: '厨娘007',
				id: '3',
				score: 5,
				signature: '我是一只小厨娘，哈哈哈！',
				praise: '9.8K'
			}
		]
	};

	public constructor( props:any )
	{
		super();
		this.state = {
			data: props.data,
			source: props.source,
			table: { striped: true }
		};
	}

	private Touch( style:'striped' )
	{
		const table = (this.state as IClassification).table;
		table[ style ] = !table[ style ];

		this.setState( {
			table
		} );
	}

	public render()
	{
		const state:IClassification = this.state as IClassification;
		const right = this.createPage( state.data );
		return (
			<div className="classification">
				<img className="back" src={require( '../img/background.fw.png' )}/>
				<img className="line" src={require( '../img/first-line.fw.png' )}/>
				<div className="firstline">
					<div className="firstleft"/>
					<div className="firstlinemid">首页</div>
					<Link to='Thechef'>
						<span><img className="bg2" src={require( '../img/pic1.png' )} alt=""/></span>
					</Link>
				</div>
				<div className="leftfication">
					<ul>
						<Link to='Home'><li>首页</li></Link>
						<Link to='Foodshow'><li>美食展</li></Link>
						<Link to='Menu'><li>菜单</li></Link>
						<Link to='Cook'><li>菜谱</li></Link>
					</ul>
					<div className="leftbottom">
						做饭吧1.1
					</div>
				</div>
				<div className="rightfication">
					{right}
				</div>
			</div>
		);
	}

	private createPage( list:Array<{ imger:string, header:string, name:string, id:string, score:number, signature:string, praise:string }> )
	{
		{
			return list.map( ( data, index ) =>
			{
				return (
					<div className="first-content1" key={index}>
						{/*<img className="pic1" src={require( '../img/home1.png' )}/>*/}
						<img src={getImgUrl( data.imger )} width="100%" alt=""/>
						<div className="body-content">
							<div className="user-shower">
								<img src={getImgUrl( data.header )} width="100%" height="100%" alt=""/>
							</div>
							<div className="user-name">
								<p>{data.name}
								{/*<i className="fa fa-star"/>*/}
								</p>
							</div>
							<div className="user-sig">
								<p>{data.signature}</p>
							</div>
							<div className="user-prs">
								<i className="fa fa-heart fa-2x"/>
								<p>{data.praise}</p>
							</div>
						</div>
					</div>
				);
			} );
		}
	}
}
