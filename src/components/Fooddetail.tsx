// ------------------------------------------------------------------------------
//
// aaa
// class: Fooddetail
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/8/1
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { getImgUrl } from "../conf/conf";
import { Link } from "react-router-dom";

interface IFooddetail
{
	data?:any;
	table?:{ striped?:boolean, share?:boolean };
}

export default class Fooddetail extends React.Component<any, any>
{
	public static defaultProps = {
		data: [
			{
				name: '米其林三星',
				img: 'food1.png',
				header: 'header-first.fw.png',
				introduction: '作为饲养员，很高兴与你分享美食。',
				contect: '我最喜欢的，就是把握的温柔全做进菜里面，让它在你的口中绽放。'
			},
			{
				name: '王子小姐',
				img: 'food4.png',
				header: 'header-two.fw.png',
				introduction: '作为饲养员，很高兴与你分享美食。',
				contect: '无。'
			}
		]
	};

	public constructor( props:any )
	{
		super();
		this.state = {
			data: props.data,
			table: { striped: true, share: true }
		};
	}

	private Hidden( style:'striped' )
	{
		const table = (this.state as IFooddetail).table;
		table[ style ] = !table[ style ];

		this.setState( {
			table
		} );
	}

	private Down( style:'share' )
	{
		const table = (this.state as IFooddetail).table;
		table[ style ] = !table[ style ];

		this.setState( {
			table
		} );
	}

	public render()
	{
		const state:IFooddetail = this.state as IFooddetail;
		const hide = state.table.striped ? { display: 'none' } : { display: 'block' };
		const cookbook = this.createList( state.data );
		const concel = state.table.striped ? { display: 'block' } : { display: 'none' };
		const down = state.table.share ? { top: 0 } : { top: -200 };
		const down2 = document.getElementById( 'bodyshow' );
		return (
			<div className="detail">
				<div className="firstline">
					<Link to='Foodshow'>
						<div className="firstleft"/>
					</Link>
					<div className="firstlinemid">意丸肉面</div>
					<Link to='Thechef'>
						<span><img className="bg2" src={require( '../img/pic1.png' )} alt=""/></span>
					</Link>
				</div>
				<img className="line" src={require( '../img/first-line.fw.png' )}/>
				<div className="sharebtn" style={hide}>
					<div className="shareheader">
						<div className="share"><span>分享到…</span></div>
						<div className="cancel"><span onClick={this.Hidden.bind( this, 'striped' )}>取消</span></div>
					</div>
					<div className="sharebody">
						<div className="container">
							<button className="friends-circle"><i className="fa fa-chrome fa-2x"/><span>微信朋友圈</span>
							</button>
							<button className="weixin"><i className="fa fa-weixin fa-2x"/><span>微信好友</span></button>
							<button className="qq"><i className="fa fa-qq fa-2x"/><span>QQ好友</span></button>
							<button className="sina"><i className="fa fa-weibo fa-2x"/><span>新浪微博</span></button>
							<button className="link"><i className="fa fa-link fa-2x"/><span>复制链接</span></button>
						</div>
					</div>
				</div>
				<div className="bg3">
					{cookbook}
				</div>
			</div>
		);
	}

	private createList( list:Array<{ header:string, name:string, img:string, introduction:string, contect:string }> )
	{
		return list.map( ( data, index ) =>
			{
				return (
					<div className="cookbook" key={index}>
						<div className="header">
							<img src={getImgUrl( data.header )} alt=""/>
						</div>
						<span className="name">{data.name}</span>
						<span className="introduction">{data.introduction}</span>
						<span className="getmenu">获取菜单</span>
						<img src={getImgUrl( data.img )} alt=""/>
						<div className="buttom">
							<p className="signation">{data.contect}</p>
							<div className="last">
								<span className="time">5小时前</span>
								<div className="lastright">
									<div className="share">
										<span className="share1">358</span><i className="fa fa-share-square-o" onClick={this.Hidden.bind( this, 'striped' )}/>
										<div/>
									</div>
									<div className="commenting">
										<span className="share2">1985</span><i className="fa fa-commenting-o"/>
										<div/>
									</div>
									<div className="heart">
										<span className="share3">18.5K</span><i className="fa fa-heart fa-2x"/>
										<div/>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}
		);
	}
}
