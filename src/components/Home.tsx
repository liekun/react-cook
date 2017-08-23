// ------------------------------------------------------------------------------
//
// 主页面
// class: Home
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/20
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import "../css/app";
import { TStartup } from "../container/CStartup";
import { Link } from "react-router-dom";
import { getImgUrl } from "../conf/conf";

interface IHome
{
	data?:any;
	table?:{ striped?:boolean };
}

export default class Home extends React.Component<TStartup, any>
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
				signature: '我的菜不怕你不爱，只怕你更爱！',
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
			table: { striped: true }
		};
	}

	private Search( style:'striped' )
	{
		const table = (this.state as IHome).table;
		table[ style ] = !table[ style ];
		this.setState( { table } );
	}

	public render()
	{
		const state:IHome = this.state as IHome;
		const hiddle = state.table.striped ? { display: 'none' } : { display: 'block' };
		const rows = this.createList( state.data );
		return (
			<div className="home-container">
				<div className="home-head">
					<Link to='Classification'>
						<span ><i className=" link-one fa fa fa-bars fa-2x"/></span>
					</Link>
					<span>首页</span>
					<span><img className="bg2" src={require( '../img/pic1.png' )} alt=""/></span>
				</div>
				<img className="line" src={require( '../img/first-line.fw.png' )}/>
				<div className="search">
					<div className="search-cover" style={hiddle}/>
					<div className="search-icon" onClick={this.Search.bind( this, 'striped' )}>
						<img className="search-img" src={require( '../img/search.png' )} alt=""/>
					</div>
					<div className="search-box" style={hiddle}>
						<div className="search-for">
							{/*<label>搜索</label>*/}
							<input type="text" placeholder="搜索"/>
							<img className="pic2" src={require( '../img/search2.png' )} alt=""/>
						</div>
						<div className="search-pic" style={hiddle}>
							<Link to="Foodshow">
								<div className="course"><img src={require( '../img/course.fw.png' )}/><p>主菜</p></div>
							</Link>
							<div className="pasta"><img src={require( '../img/pasta.fw.png' )}/><p>面食</p>
							</div>
							<div className="dessert"><img src={require( '../img/dessert.fw.png' )}/><p>甜点</p>
							</div>
						</div>
					</div>
				</div>
				{rows}
			</div>
		);
	}

	private createList( list:Array<{ imger:string, header:string, name:string, id:string, score:number, signature:string, praise:string }> )
	{
		return list.map( ( data, index ) =>
		{
			return (
				<div className="first-content" key={index}>
					{/*<img className="pic1" src={require( '../img/home1.png' )}/>*/}
					<img src={getImgUrl( data.imger )} width="100%" alt=""/>
					<div className="body-content">
						<div className="user-shower">
							<img src={getImgUrl( data.header )} width="100%" height="100%" alt=""/>
						</div>
						<div className="user-name">
							<p>{data.name}
							{/*<i className="fa fa-star" color="red"/>*/}
							</p>
						</div>
						<div className="user-sig">
							<p>{data.signature}</p>
						</div>
						<div className="user-prs">
							<i className="fa fa-heart fa-1x"/>
							<p>{data.praise}</p>
						</div>
					</div>
				</div>
			);
		} );
	}
}
