// ------------------------------------------------------------------------------
//
// class: Cook
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/27
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { getImgUrl } from "../conf/conf";
import { Link, NavLink } from "react-router-dom";

interface ICook
{
	data?:any;
}

export default class Cook extends React.Component<any, any>
{
	public static defaultProps = {
		data: [
			{
				imger: 'cook1.fw.png',
				name: '苦瓜酿肉'
			}
			,
			{
				imger: 'cook4.fw.png',
				name: '秘制烧酥肉'
			},
			{
				imger: 'cook3.fw.png',
				name: '三鲜煎饺'
			},
			{
				imger: 'cook2.fw.png',
				name: '鲜虾春卷'
			},
			{
				imger: 'cook5.png',
				name: '蛋炒饭'
			},
			{
				imger: 'cook3.fw.png',
				name: '三鲜煎饺'
			}
		]
	};

	public constructor( props:any )
	{
		super();
		this.state = {
			data: props.data
		};
	}

	public render()
	{
		const state:ICook = this.state as ICook;
		const list = this.createList( state.data );
		return (
			<div className="cook-container">
				{/*<div className="cook-head">*/}
				{/*<span><i className="fa fa-chevron-left"/></span>*/}
				{/*<span></span>*/}
				{/*<span><img className="bg2" src={require( '../img/pic1.png' )} alt=""/></span>*/}
				{/*</div>*/}
				<div className="firstline">
					<Link to='classification'>
						<div className="firstleft"/>
					</Link>
					<div className="firstlinemid">菜谱</div>
					<Link to='Thechef'>
						<span><img className="bg2" src={require( '../img/pic1.png' )} alt=""/></span>
					</Link>
				</div>
				<img className="line" src={require( '../img/first-line.fw.png' )}/>
				<img className="cook0" src={require( '../img/cook0.fw.png' )} alt=""/>
				<div className="party">
					<p>多 <span> | </span> 人 <span> | </span> 聚 <span> | </span> 会</p>
					<span className="name">由 <i>米其林star </i> 发布</span>
					<span className="fa fa-heart">18.5K</span>
				</div>
				<div className="cookbooks">
					<div className="cookbook-lists red">
						<NavLink className="navlink" activeClassName="selected" to="">
							<p>开&nbsp;始<br/>做&nbsp;菜</p>
						</NavLink>
					</div>
					{list}
				</div>
			</div>
		);
	}

	private createList( list:Array<{ imger:string, name:string }> )
	{
		return list.map( ( data, index ) =>
		{
			return (
				<div className="cookbook-lists" key={index}>
					<Link to='Cookbooktwo'>
						<img src={getImgUrl( data.imger )} alt=""/>
						<div className="ck-box">{data.name}</div>
					</Link>
				</div>

			);
		} );
	}
}
