import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoadmapList } from "./roadmap/RoadmapList";
import { RoadmapCreate } from "./roadmap/RoadmapCreate";
import { RoadmapEdit } from "./roadmap/RoadmapEdit";
import { RoadmapShow } from "./roadmap/RoadmapShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { IdeaList } from "./idea/IdeaList";
import { IdeaCreate } from "./idea/IdeaCreate";
import { IdeaEdit } from "./idea/IdeaEdit";
import { IdeaShow } from "./idea/IdeaShow";
import { InvestmentList } from "./investment/InvestmentList";
import { InvestmentCreate } from "./investment/InvestmentCreate";
import { InvestmentEdit } from "./investment/InvestmentEdit";
import { InvestmentShow } from "./investment/InvestmentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"IdeaDevelopmentPlatform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Roadmap"
          list={RoadmapList}
          edit={RoadmapEdit}
          create={RoadmapCreate}
          show={RoadmapShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Idea"
          list={IdeaList}
          edit={IdeaEdit}
          create={IdeaCreate}
          show={IdeaShow}
        />
        <Resource
          name="Investment"
          list={InvestmentList}
          edit={InvestmentEdit}
          create={InvestmentCreate}
          show={InvestmentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
