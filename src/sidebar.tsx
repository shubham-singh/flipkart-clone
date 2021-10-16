import styled from "styled-components";
import Sort from "./sort";
import Filter from "./filter";
import { DataInterface } from "./types";

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 1rem;
  margin: 1rem;
`;

export default function Sidebar({
  data,
  setData
}: {
  data: DataInterface;
  setData: React.Dispatch<React.SetStateAction<DataInterface>>;
}) {
  return (
    <Aside>
      <Sort setData={setData} />
      <Filter setData={setData} data={data} />
    </Aside>
  );
}
