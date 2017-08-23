// ------------------------------------------------------------------------------
//
// 登录
// class: Login
// author: 喵大斯( h5devs.com/h5devs.net )
// created: 2017/7/20
// copyright (c) 2015 喵大斯( aosnow@yeah.net )
//
// ------------------------------------------------------------------------------
import * as React from 'react';
import { TStartup } from "../container/CStartup";
import { Link } from "react-router-dom";

export default class Login extends React.Component<TStartup, any>
{

	public constructor()
	{
		super();
	}

	public render()
	{
		return (
			<div className="log-container">
				{/*<img className="bg" src={require( '../img/pic2.fw.png' )}/>*/}
				<div className="content">
					<div className="head">
						<span><i className="fa fa-chevron-left"/>&nbsp;</span>
						<span>登录</span>
						<span>注册</span>
					</div>
					<div className="icon">
						<img src={require( '../img/header.png' )} alt=""/>
					</div>
					<div className="from">
						<div className="input-box">
							<span>国家</span>
							<input type="text" placeholder="中国"/>
						</div>
						<div className="input-box">
							<span>+86</span>
							<input type="text" placeholder="请输入登录手机号"/>
						</div>
						<div className="input-box">
							<span>密码</span>
							<input type="text" placeholder="密码"/>
						</div>
					</div>
					<div className="submit">
						<Link to="/Home">
							<button>登录</button>
						</Link>
						<p>忘记了密码？</p>
					</div>
					<div className="foot">
						<p>第三方登录</p>
						<i className="fa fa-weixin fa-2x"/>&nbsp;
						<i className="fa fa-qq fa-2x"/>&nbsp;
						<i className="fa fa-weibo fa-2x"/>&nbsp;
					</div>
				</div>
			</div>
		);
	}
}
