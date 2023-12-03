// React 라이브러리와 Component 클래스를 import합니다.
import React, { Component } from "react";

// 다른 컴포넌트들을 import합니다.
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Like from "./components/Like";

// 이미지 파일들을 import합니다.
import LinkGood from "./img/LinkGood.png";
import zelda_Title from "./img/zelda_Title.png";
import mainCharacters from "./img/mainCharacters.jpg";
import metaScore from "./img/metaScore.png";
import reactImg from "./img/react.png";

// App 클래스를 정의합니다. Component를 상속받습니다.
class App extends Component {
  // constructor를 통해 컴포넌트의 초기 상태를 설정합니다.
  constructor(props) {
    super(props); // Component 클래스의 생성자를 호출합니다.
    this.max_content_id = 4;
    this.state = {
      mode: "welcome", // 현재 모드를 'welcome'으로 설정합니다.
      selected_content_id: 0, // 선택된 content의 id를 0으로 초기화합니다.
      subject: { title: "THE LEGEND OF ZELDA", sub: "Greatest Game of All Time!!!" }, // 상단 제목에 대한 정보를 객체로 설정합니다.
      welcome: { title: "Welcome", desc: "This is Link!", image: LinkGood }, // 환영 메시지와 이미지를 객체로 설정합니다.
      contents: [
        // 컨텐츠의 배열을 설정합니다. 각 항목은 id, title, desc, image 속성을 갖습니다.
        {
          id: 1,
          title: "Introduction",
          desc: '《젤다의 전설》은 일본의 비디오 게임 개발자들 미야모토 시게루와 테즈카 타카시가 기획한 액션 어드벤처 게임 시리즈이다.《젤다의 전설》의 주무대는 중세 서유럽의 영향을 받은 가상의 판타지 세계 "하이랄 왕국"이다. 작중의 하이랄 왕국에 대한 모습은 《신들의 트라이포스》, 《시간의 오카리나》, 《바람의 지휘봉》, 《황혼의 공주》, 《스카이워드 소드》 등 시리즈가 전개됨에 따라 다양한 지역과 심도있는 역사가 추가됐다. 하이랄의 주요인구는 엘프같은 뾰족한 귀를 지닌 인간체 하일리아인이며 플레이어 캐릭터 링크와 공주 주역 젤다 또한 하일리아인이다.《젤다의 전설》의 가상 세계관은 각 게임마다 다르다. 대체적인 역사시간선에서 가논이 여러 번 침략을 해왔고 왕가의 공주와 마스터 소드에게 선택받은 용사가 가논돌프 또는 가논을 물리쳤다.',
          image: zelda_Title,
        },
        { id: 2, title: "Main Character", desc: '링크는 《젤다의 전설》 게임들의 주인공이 공유하는 이름이다. 각 작품의 "링크"는 대체적으로 뾰족한 녹색 모자를 쓰고 용기의 트라이포스를 사용하는 소년 남자의 하일리아인이라는 특징이 있다. 대부분의 게임에서 플레이어는 모험 시작 전 링크에게 별개의 이름을 지어줄 수 있으며 이 경우 논플레이어 캐릭터는 해당 이름으로 링크를 지칭한다. 각 작품의 링크는 별명을 가지고 있는데, 예를 들어 《시간의 오카리나》와 《무쥬라의 가면》의 링크는 "시간의 용사"라고 불린다. 비디오 게임의 과묵한 주인공으로서 링크는 직접 말을 하지 않고 단말마같은 짧은 음성만 낸다. 젤다는 하이랄의 공주이자 지혜의 트라이포스의 수호자이다. 《젤다의 전설》 시리즈의 "젤다"들은 서로가 조상 혹은 자손인 혈연관계를 가졌다. 대부분의 게임에서 젤다는 링크가 가논으로부터 구출해야하는 대상이지만, 일부에서 마법과 무기를 사용해 전투에 참여하거나 보조하는 역할도 맡는다.가논, 정식명칭 가논돌프는 《젤다의 전설》 시리즈 전체에서 최종악역을 맡는 인물이다. 가논은 사막 도적민족 겔드의 지도자이다. 링크, 젤다같은 시리즈 내 고정출연 인물들과는 달리 모든 작품에 등장하는 가논은 동일인물이라는 특징이 있다.', image: mainCharacters },
        {
          id: 3,
          title: "Metacritic Score",
          desc: '발매되는 시리즈마다 평점이 항상 최상~상위권에 머무르는 닌텐도 대표 걸작 시리즈 중의 하나로, 패미통 평점 만점을 받은 몇 안 되는 게임 목록 중에 유일하게 다섯 개의 게임을 올려놓은 시리즈이기도 하며, 역대 최고의 게임 랭킹에서 신들의 트라이포스, 시간의 오카리나, 브레스 오브 더 와일드 등은 항상 최상위권을 고수하고 있다. 특히 젤다의 전설 시간의 오카리나는 메타크리틱에서 무려 99점이라는 가장 높은 점수를 보유하고 있으며, 현재도 브레스 오브 더 와일드와 1, 2위를 나눠가지고 있다.',
          image: metaScore,
        }
      ],
    };
  }

  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title,
      _desc,
      _image,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
      _article = (
        <ReadContent title={_title} desc={_desc} img={_image}></ReadContent>
      );
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
      _article = (
        <ReadContent title={_title} desc={_desc} img={_image}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
              image: "",
            });
            this.setState({ contents: _contents });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      var _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({ contents: _contents, mode: "read" });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  // render 함수는 컴포넌트가 화면에 렌더링될 때 호출됩니다.
  render() {
    // 최종적으로 렌더링될 JSX를 return합니다.
    return (
      <div className="App">
        {/* Subject 컴포넌트는 웹사이트의 제목 부분을 렌더링합니다. */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" }); // 클릭 시 mode를 'welcome'으로 설정합니다.
          }.bind(this)}
        ></Subject>
        {/* TOC 컴포넌트는 Table of Contents를 렌더링합니다. */}
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read", // 클릭 시 mode를 'read'로 설정합니다.
              selected_content_id: Number(id), // 선택된 컨텐츠의 id를 설정합니다.
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("really?")) {  
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({ mode: "welcome", contents: _contents });
                alert("deleted!");
              }
            } else {
              this.setState({ mode: _mode });
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
        {/* Content 컴포넌트는 선택된 컨텐츠의 내용과 이미지를 렌더링합니다. */} 
        <Like></Like>
      </div>
    );
  }
}

// App 컴포넌트를 export합니다. 다른 파일에서 App 컴포넌트를 사용할 수 있게 됩니다.
export default App;