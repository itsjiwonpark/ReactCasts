import React, { Component } from "react";
import NewsList from "./NewsList";
import "isomorphic-fetch";

class News extends Component {
  constructor(props) {
    super(props)
    console.log('constructor has been fired')
    // 왜 서버에서 들어왔을때도 constructor를 거치고 클라이언트에서 link를 통해 
    // 라우팅됐을때도 constructor를 거치는데 
    // 그리고 윈도우 객체의 변수를 삭제하지도 않았는데 
    // 왜 브라우저에서 link를 통해 가면 window객체에는 undefined가 들어있고 initialData에 아무것도 안들어올까?
    // 혹시 script 태그가 넣어진 순서때문에? 그건 아닐거임.. virtual돔에서는 윈도우 객체에 접근했었으니까 
    let initialData
    if(props.staticContext) {
      initialData = props.staticContext.initialData
    } else {
      initialData = window.__initialData__
      // delete window.__initialData__
    }
    this.state = { news: initialData }
  }

  static requestInitialData(){
    return fetch("http://localhost:3000/api/news")
    .then(response => response.json())
  }

  // componentDidMount(){
  //   News.requestInitialData()
  //    .then(news => this.setState({ news }))
  // }

  render() {
    const { news } = this.state;
    return <NewsList news={news} />;
  }
}

export default News;


// 마크업이 서버에서 먼저 생겨나긴 하지만 리액트 컴포넌트가 브라우저에서 mount했을때는 데이터가 없음.  
// 리액트 virtual돔에 그렸을 때 서버의 마크업과 맞지 않는 거임.

// 

// 브라우저에서도 데이터 접근이 가능하도록하는 두 가지 방법이 있음
// 가장 간단한 방법은 글로벌 객체에 initialData라는 변수를 집어넣는거임. 

/**
 * 라우팅 처리를 해줘야 함.
 * news를 통해 오지 않고 다른 컴포넌트를 통해 사이트에 접근했을때도 데이터를 바로 받아야 함. 
 * 그리고 다른 컴포넌트에서도 다른 데이터 fetching을 필요로 할 수 있음. 
 */