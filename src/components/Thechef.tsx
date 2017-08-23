// ------------------------------------------------------------------------------
//
// Thechef
// class: Thechef
// author: gang( h5devs.com/h5devs.net )
// created: 2017/7/21
// copyright (c) 2015 gang( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link } from "react-router-dom";
import { getImgUrl } from "../conf/conf";
interface IThechef
{
	data?:any;
	source?:any;
	table?:{ striped?:boolean };
}
export default class Thechef extends React.Component<any, any>
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
				header: 'header-two.png',
				name: '我是一个饲养员',
				id: '2',
				score: 5,
				signature: '我的菜不怕你不爱，只怕你更爱！！！',
				praise: '23.5K'
			},
			{
				imger: 'home3.png',
				header: 'header-first.png',
				name: '厨娘007',
				id: '3',
				score: 5,
				signature: '我是一只小厨娘，哈哈哈！',
				praise: '9.8K'
			}
		],
		source: [ { name: '发布' }, { name: '关注' }, { name: '粉丝' }, { name: '收藏夹' }, { name: '喜欢' }, { name: '获取的菜单' }, { name: '设置' } ]
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

	public componentDidMount()
	{
		const { startup } = this.props;
		startup();
	}

	public render()
	{
		const state:IThechef = this.state as IThechef;
		const left = this.createPage( state.data );
		const right = this.createList( state.source );
		return (
			<div className="thechef">
				<img className="back" src={require( '../img/background.fw.png' )}/>
				<img className="line" src={require( '../img/first-line.fw.png' )}/>
				<div className="firstline">
					<Link to="./Classification">
						<i className="fa fa-align-left fa-2x"/>
					</Link>
					<div className="firstlinemid">本大厨</div>
					<Link to="./Foodshow">
						<div className="firstright"/>
					</Link>
				</div>
				<div className="ben">{left}</div>
				<div className="rightfication">
					{right}
					<div className="leftbottom">
						做饭吧1.1
					</div>
				</div>
			</div>
		);
	}
	private createList( list:Array<{ name:string }> )
	{
		const state:IThechef = this.state as IThechef;
		return list.map( ( data, index ) =>
			{
				return (
					<div className="fication" key={index}>
						{data.name}
					</div>
				);
			}
		);
	}
	private createPage( list:Array<{ imger:string, header:string, name:string, id:string, score:number, signature:string, praise:string }> )
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
							<p>{data.name}<i className="fa fa-star"/></p>
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
