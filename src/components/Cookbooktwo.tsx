// ------------------------------------------------------------------------------
//
// Cookbooktwo
// class: Cookbooktwo
// author: gang( h5devs.com/h5devs.net )
// created: 2017/7/26
// copyright (c) 2015 gang( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { Link } from "react-router-dom";
import '../css/Cookbooktwo';
import { getImgUrl } from "../conf/conf";
interface ICookbooktwo
{
	data?:any;
	ingredients?:any;
	accessories?:any;
	step?:any;
}
export default class Cookbooktwo extends React.Component<any, any>
{
	public static defaultProps = {
		data: [
			{
				img: 'backred.fw.png',
				name: '开始做菜'
			},
			{
				img: 'cook1.fw.png',
				name: '苦瓜酿肉'
			},
			{
				img: 'cooktwo.fw.png',
				name: '秘制烧酥肉'
			},
			{
				img: 'cookthree.fw.png',
				name: '三鲜煎饺'
			},
			{
				img: 'cookfour.fw.png',
				name: '鲜虾春卷'
			},
			{
				img: 'cookfive.fw.png',
				name: '南瓜蓉汤'
			},
			{
				img: 'cooksix.fw.png',
				name: '私家炒蛋饭'
			},
			{
				img: 'cookseven.fw.png',
				name: '绝味卤蛋'
			}
		],
		ingredients: {
			first: [ { food: '苦瓜1根      猪肉馅200g ' } ]
		},
		accessories: {
			first: [ { food: '盐 3g' },
				{ food: '葱花 5g' }, { food: '糖 2g' },
				{ food: '红椒末 3g' }, { food: '鸡精 1g' },
				{ food: '姜末 5g' }, { food: '玉米淀粉 8g' }, { food: '白胡椒粉 1g' } ]
		},
		step: {
			first: [ { step: '准备好食材：苦瓜和猪肉末' }, { step: '肉末里分别放入盐2克、姜末、葱花、鲜酱油、糖、玉米淀粉、白胡椒粉、鸡精' } ]
		}
	};

	public constructor( props:any )
	{
		super();
		this.state = {
			data: props.data,
			ingredients: props.ingredients,
			accessories: props.accessories,
			step: props.step
		};
	}

	public render()
	{
		const state:ICookbooktwo = this.state as ICookbooktwo;
		const data = state.data;
		const data1 = data.slice( 1 );
		const data2 = data1.slice( 1 );
		const data3 = data.slice( 1, 2 );
		const ingredientsfirst = state.ingredients.first;
		const accessoriesfirst = state.accessories.first;
		const ingredients = this.creatIngredient( ingredientsfirst );
		const accessories = this.creatAccessorie( accessoriesfirst );
		const secondleft = this.secondLeft( data2 );
		return (
			<div className="foodshowtwo">
				<img className="back" src={require( '../img/background.fw.png' )}/>
				<img className="line" src={require( '../img/first-line.fw.png' )}/>
				<div className="firstline">
					<Link to='classification'>
						<div className="firstleft"/>
					</Link>
					<div className="firstlinemid">菜谱</div>
					<span><img className="bg2" src={require( '../img/pic1.png' )} alt=""/></span>
				</div>
				<div className="body">
					<div className="bodyfirst">
						<div className="firstleft">
							<div className="left">
								<img src={getImgUrl( data3[ 0 ].img )}/>
							</div>
							<div className="name">{data3[ 0 ].name}</div>
						</div>
						<div className="firstright">
							<span className="number">165</span>
							<span className="string">人成功过</span>
						</div>
					</div>
					<div className="bodysecond">
						<div className="secondleft">
							{secondleft}
						</div>
						<div className="secondright">
							<div className="ingredients">
								<div className="ingredient">主料</div>
								<div className="container">
									{ingredients}
								</div>
								<img src={require( '../img/first-line.fw.png' )}/>
							</div>
							<div className="accessories">
								<div className="accessorie">辅料</div>
								<div className="container">
									{accessories}
								</div>
								<img src={require( '../img/first-line.fw.png' )}/>
							</div>
							<div className="practice">
								<div className="pra">做法</div>
								<div className="container">
									<div className="step">
										<div className="stepfirst">
											<span className="serial">1</span>
											<div className="content">{state.step.first[ 0 ].step}</div>
										</div>
										<div className="prictuer">
											<img src={require( '../img/foodbookone.fw.png' )}/>
										</div>
									</div>
									<div className="step">
										<div className="stepfirst">
											<span className="serial">2</span>
											<div className="content">{state.step.first[ 1 ].step}</div>
										</div>
										<div className="prictuer">
											<img src={require( '../img/foodbooktwo.fw.png' )}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	private secondLeft( list:Array<{ link:string, img:string, header:string, name:string, foodname:string, contect:string, score:number }> )
	{
		return list.map( ( data, index ) =>
			{
				return (
					<div className="list" key={index}>
						{/*<img src={getImgUrl + data.img}/>*/}
						<img src={getImgUrl( data.img )} width="100%" alt=""/>
					</div>
				);
			}
		);
	}

	private creatIngredient( list:Array<{ food:string }> )
	{
		return list.map( ( data, index ) =>
			<div className="food" key={index}>{data.food}</div>
		);
	}

	private creatAccessorie( list:Array<{ food:string }> )
	{
		return list.map( ( data, index ) =>
			<div className="food" key={index}>{data.food}</div>
		);
	}
}
