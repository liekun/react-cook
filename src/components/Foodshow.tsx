// ------------------------------------------------------------------------------
//
// class: Foodshow
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/26
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link } from "react-router-dom";
import { getImgUrl } from "../conf/conf";

interface IFoodshow
{
	commit?:any;
	data?:any;
	source?:any;
	table?:{ striped?:boolean, share?:boolean };
}

export default class Foodshow extends React.Component<any, any>
{
	public static defaultProps = {
		data: [
			{
				img: 'foodfirst.fw.png',
				header: 'header-first.png',
				name: '米其林三星',
				foodname: '肉丸意面',
				content: '我最喜欢的，就是把握的温柔全做进菜里面，让它在你的口中绽放。'
			},
			{
				img: 'foodtwo.png',
				header: 'header-two.fw.png',
				name: '我是一个饲养员',
				foodname: '奶油浓汤',
				content: '一口绵糯，两口香滑；第三口是什么味道呢？'
			},
			{
				img: 'food3.png',
				header: 'header-first.png',
				name: '米其林三星',
				foodname: '培根西红柿煎蛋',
				content: '最好的早餐是什么？我知道最好的是什么，我最喜欢的是早上醒来嗅到的那一缕煎蛋香。'
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

	private Search( style:'striped' )
	{
		const table = (this.state as IFoodshow).table;
		table[ style ] = !table[ style ];
		this.setState( { table } );
	}

	public render()
	{
		const state:IFoodshow = this.state as IFoodshow;
		const data = state.data;
		const hiddle = state.table.striped ? { display: 'none' } : { display: 'block' };
		const foodshow = this.createList( state.data );
		const nameodd = data[ 0 ].name;
		const foodname = data[ 0 ].foodname;
		const content = data[ 0 ].content;
		return (
			<div className="home-container2">
				<div className="firstline">
					<Link to='classification'>
						<div className="firstleft"/>
					</Link>
					<div className="firstlinemid">美食展</div>
					<Link to='Thechef'>
						<span><img className="bg2" src={require( '../img/pic1.png' )} alt=""/></span>
					</Link>
				</div>
				<img className="line" src={require( '../img/first-line.fw.png' )}/>
				<div className="search">
					<div className="search-cover" style={hiddle}/>
					<div className="search-icon" onClick={this.Search.bind( this, 'striped' )}>
						<img className="search-img" src={require( '../img/search.png' )} alt=""/>
					</div>
					<div className="search-box" style={hiddle}>
						<div className="search-for">
							<label>搜索</label>
							<input type="text"/>
							<img className="pic2" src={require( '../img/search2.png' )} alt=""/>
						</div>
						<div className="search-pic" style={hiddle}>
							<div className="course"><img src={require( '../img/course.fw.png' )}/><p>主菜</p></div>
							<div className="pasta"><img src={require( '../img/pasta.fw.png' )}/><p>面食</p>
							</div>
							<div className="dessert"><img src={require( '../img/dessert.fw.png' )}/><p>甜点</p>
							</div>
						</div>
					</div>
				</div>
				{foodshow}
			</div>
		);
	}

	private createList( list:Array<{ img:string, header:string, name:string, foodname:string, content:string, score:number }> )
	{
		return list.map( ( data, index ) =>
		{
			return (
				index % 2 === 0 ? (
					<div className="show-content" key={index}>
						<div className="show-first">
							{/*<img src={require( '../img/foodfirst.fw.png' )}/>*/}
							<img src={getImgUrl( data.img )} width="100%" alt=""/>
							<div className="show-user">
								{/*<img src={require( '../img/header-first.fw.png' )}/>*/}
								<img src={getImgUrl( data.header )} width="100%" alt=""/>
								<div className="right-star">
									<i className="fa fa-star"/>
									<i className="fa fa-star"/>
									<i className="fa fa-star"/>
								</div>
								<span className="author">{data.name}</span>
								<span className="foodname">{data.foodname}</span>
								<Link to="Fooddetail">
									<p>{data.content}</p>
								</Link>
							</div>
						</div>
					</div>)
					: (
					<div className="show-content" key={index}>
						<div className="show-second">
							<div className="show-user">
								<img src={getImgUrl( data.header )} width="100%" alt=""/>
								<div className="left-star">
									<i className="fa fa-star"/>
									<i className="fa fa-star"/>
									<i className="fa fa-star"/>
								</div>
								<span className="author">{data.name}</span>
								<span className="foodname">{data.foodname}</span>
								<p>{data.content}</p>
							</div>
							<img src={getImgUrl( data.img )} width="100%" alt=""/>
						</div>
					</div>
				)
			);
		} );
	}
}
