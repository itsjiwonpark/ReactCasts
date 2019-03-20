import React, { Component } from "react";
import NewsList from "./NewsList";
import "isomorphic-fetch";

class News extends Component {
  constructor(props) {
    super(props);
    if(props.initialData){
      let initialData = props.initialData
      this.state = { news: initialData }
    }
  }

  render() {
    const { news } = this.state;
    return <NewsList news={news} />;
  }
}

export default News;

// 여기까지만 하면 에러 뜸
// 마크업이 서버에서 먼저 생겨나긴 하지만 리액트 컴포넌트가 브라우저에서 mount했을때는 데이터가 없음.  
// 리액트 virtual돔에 그렸을 때 서버의 마크업과 맞지 않는 거임.

// 브라우저에서도 데이터 접근이 가능하도록하는 두 가지 방법이 있음
