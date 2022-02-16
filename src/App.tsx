import { ChangeEventHandler, Component, createRef, RefObject } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { User } from "./types";

interface AppProps {}
interface AppState {
  users: User[];
  searchField: string;
  results: User[];
}

class App extends Component<AppProps, AppState> {
  searchInputRef: RefObject<HTMLInputElement> = createRef();
  state: Readonly<AppState> = {
    users: [],
    searchField: "",
    results: [],
  };

  // === using the constructor is optional (because of Babel) ===

  // pass props parameter in constructor
  // - to construct parent Component class with props
  // - when you need this.props in constructor
  constructor(props: AppProps) {
    super(props);
    // this.searchInputRef = createRef();

    // other way to define state:

    // this.state = {
    //   users: [],
    //   searchField: "",
    //   results: [],
    // };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((users) => this.setState({ users, results: users }));

    this.searchInputRef?.current?.focus();
  }

  // to determine when not to rerender (for performance or other)
  shouldComponentUpdate(
    nextProps: Readonly<AppProps>,
    nextState: Readonly<AppState>,
    nextContext: any
  ) {
    return true;
  }

  // for cleanup before component destruction (memory leaks prevention)
  componentWillUnmount() {}

  // triggeredvafter new prrops / state update / forceUpdate()
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleSearchChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    this.setState(
      {
        searchField: target.value.trim(),
      },
      // once state has finished updating:
      () => {
        // state updates are async:
        // Do not use this.state inside this.setState()
        // because setState() is async and this.state might not be what you thinlk
        // Use a callback (to which the previous state and props will be passed to)
        // in setState to access latest state and props when calling setState
        this.setState(({ users, searchField }) => ({
          results: users.filter((u) =>
            u.name.toLowerCase().includes(searchField.toLowerCase())
          ),
        }));
      }
    );

  // React updates the real DOM and refs after this
  render() {
    return (
      <div className="App">
        <h1>Users Rolodex</h1>
        <SearchBox
          handleSearchChange={this.handleSearchChange}
          searchInputRef={this.searchInputRef}
          placeholder="search user"
        />
        <br />
        <br />
        <CardList users={this.state.results} />
      </div>
    );
  }
}

export default App;
