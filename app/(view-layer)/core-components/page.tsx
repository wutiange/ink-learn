import ResourceCard from "../components/resource-card";
import { coreComponents } from "./data";

function CoreComponentsPage() {
  return (
    <ResourceCard items={coreComponents} />
  )
}

export default CoreComponentsPage;