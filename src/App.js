import "./App.css";
import {
  Logo,
  NameForm,
  PlannerForm,
  SuccessPage,
  Tracker,
  WorkspaceForm,
} from "./components";
import { useForm } from "./context/Form-Context";

function App() {
  const { currentLayout: layout } = useForm();
  const currentLayout = (layout) => {
    switch (layout) {
      case "nameSection":
        return <NameForm />;
      case "workspaceSection":
        return <WorkspaceForm />;
      case "planner":
        return <PlannerForm />;
      case "successPage":
        return <SuccessPage />;
      default:
        return;
    }
  };
  return (
    <div className="font-inter h-[calc(100vh-10rem)] flex justify-start pt-20 gap-14 items-center flex-col ">
      <Logo />
      <Tracker />
      {currentLayout(layout)}
    </div>
  );
}

export default App;
