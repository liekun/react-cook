// ------------------------------------------------------------------------------
//
// 搜索插件
// class: Search
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/26
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';

interface ISearch
{
	table?:{ striped?:boolean };
}
export default class Search extends React.Component<any, any>
{

	public constructor( props:any )
	{
		super();
		this.state = {
			table: { striped: true }
		};
	}

	private Search( style:'striped' )
	{
		const table = (this.state as ISearch).table;
		table[ style ] = !table[ style ];
		this.setState( { table } );
	}

	public render()
	{
		const state:ISearch = this.state as ISearch;
		const hiddle = state.table.striped ? { display: 'none' } : { display: 'block' };
		return (
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
		);
	}
}
