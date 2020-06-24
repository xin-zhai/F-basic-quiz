import "./style/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import userApi from "./api/users";
import educationApi from "./api/education";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      education: "",
    };
  }

  async componentDidMount() {
    const response = await userApi.getUserMessage(1);
    const education = await educationApi.getEducationMessage(1);

    this.setState({ response, education });
  }

  render() {
    const { response } = this.state;
    const { education } = this.state;
    const { avatar } = response;
    const educationResult = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const example of education) {
      educationResult.push(
        <div>
          <p>
            {example.year}
            {"      "}
            {example.title} {example.description}
          </p>
        </div>
      );
    }
    return (
      <div>
        <header className="header">
          <img src={avatar} alt="photo" />
        </header>
        <main className="main">
          <h2>HELLO,</h2>
          <h3>
            MY NAME IS {response.name} {response.age}YO AND THIS IS MY RESUME/CV
          </h3>
          <h3>ABOUT ME</h3>
          {response.description}
          <h3>EDUCTION</h3>
          {educationResult}
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
