// ------------------------------------------------------------------------------
//
// 多个餐
// class: menu
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/26
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import "../css/app";
import { Link } from "react-router-dom";
import { getImgUrl } from "../conf/conf";

interface IMenu
{
	data?:any;
	source?:any;
}

export default class Menu extends React.Component<any, any>
{
	public static defaultProps = {
		data: [
			{
				img: 'menufirst.png',
				name: '凯瑟琳',
				menus: '贵族单人餐',
				content: '一杯酒、一道菜；一个人、一独尊'
			},
			{
				img: 'menutwo.png',
				name: 'MRS.陈',
				menus: '温馨二人餐',
				content: '几盏烛灯由你亲手点燃，几道可口饭由你亲手完成···'
			},
			{
				img: 'menuthree.png',
				name: '米其林',
				menus: '多人聚会',
				content: '在周末，叫上几个朋友;展示一下厨艺，畅聊心情。'
			}
		]
	};

	public constructor( props:any )
	{
		super();
		this.state = {
			source: props.source,
			data: props.data
		};
	}

	public render()
	{
		const state:IMenu = this.state as IMenu;
		const data = state.data;
		const menus = this.createList( state.data );
		const nameodd = data[ 0 ].name;
		// const menus = data[ 0 ].menus;
		const menus3 = data[ 2 ].menus;
		const content = data[ 0 ].content;
		const content3 = data[ 2 ].content;
		return (
			<div className="menu-container">
				{/*<div className="menu-head">*/}
				{/*<span><i className="fa fa-chevron-left"/></span>*/}
				{/*<span></span>*/}
				{/*<span><img className="bg2" src={require( '../img/pic1.png' )} alt=""/></span>*/}
				{/*</div>*/}
				<div className="firstline">
					<Link to='classification'>
						<div className="firstleft"/>
					</Link>
					<div className="firstlinemid">菜单</div>
					<Link to='Thechef'>
						<span><img className="bg2" src={require( '../img/pic1.png' )} alt=""/></span>
					</Link>
				</div>
				<img className="line" src={require( '../img/first-line.fw.png' )}/>
				{/*<div className="menu-content">*/}
				{/*<div className="menu-first">*/}
				{/*<img src={require( '../img/menufirst.png' )}/>*/}
				{/*<div className="menu-user">*/}
				{/*<div className="user-prs">*/}
				{/*<i className="fa fa-heart fa-2x"/>*/}
				{/*<span>18.5K</span>*/}
				{/*</div>*/}
				{/*<span className="author">{menus}</span>*/}
				{/*<span className="menu1">{content}</span>*/}
				{/*<span className="name">由 <i>{nameodd}</i> 发布</span>*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*<div className="menu-content">*/}
				{/*<div className="menu-second">*/}
				{/*<img src={require( '../img/menutwo.png' )}/>*/}
				{/*<div className="menu-user">*/}
				{/*<div className="user-prs">*/}
				{/*<i className="fa fa-heart fa-2x"/> <br/>*/}
				{/*<span>18.5K</span>*/}
				{/*</div>*/}
				{/*<span className="author">温馨二人餐</span>*/}
				{/*<span className="menu1">几盏烛灯由你亲手点燃，<br/>几道可口饭由你亲手完成···</span>*/}
				{/*<span className="name">由 <i>MRS.陈</i> 发布</span>*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
				{menus}
				{/*<div className="menu-content">*/}
				{/*<div className="menu-first">*/}
				{/*<img src={require( '../img/menuthree.png' )}/>*/}
				{/*<div className="menu-user">*/}
				{/*<div className="user-prs">*/}
				{/*<i className="fa fa-heart fa-2x"/>*/}
				{/*<span>18.5K</span>*/}
				{/*</div>*/}
				{/*<Link to="Cook">*/}
				{/*<span className="author">{menus3}</span>*/}
				{/*</Link>*/}
				{/*<span className="menu1">{content3}</span>*/}
				{/*<span className="name">由 <i>{nameodd}</i> 发布</span>*/}
				{/*</div>*/}
				{/*</div>*/}
				{/*</div>*/}
			</div>
		);
	}

	public createList( list:Array<{ img:string, name:string, menus:string, content:string }> )
	{
		return list.map( ( data, index ) =>
		{
			return (
				index % 2 === 0 ? (
					<div className="menu-content" key={index}>
						<div className="menu-first">
							<img src={getImgUrl( data.img )} width="100%" alt=""/>
							<div className="menu-user">
								<div className="user-prs">
									<i className="fa fa-heart fa-2x"/>
									<span>18.5K</span>
								</div>
								<Link to='Cook'><span className="author">{data.menus}</span></Link>
								<span className="menu1">{data.content}</span>
								<span className="name">由 <i>{data.name}</i> 发布</span>
							</div>
						</div>
					</div>)
					: (
					<div className="menu-content" key={index}>
						<div className="menu-second">
							<img src={getImgUrl( data.img )} width="100%" alt=""/>
							<div className="menu-user">
								<div className="user-prs">
									<i className="fa fa-heart fa-2x"/> <br/>
									<span>18.5K</span>
								</div>
								<span className="author">{data.menus}</span>
								<span className="menu1">{data.content}</span>
								<span className="name">由 <i>{data.name}</i> 发布</span>
							</div>
						</div>
					</div>
				)
			);
		} );
	}
}
