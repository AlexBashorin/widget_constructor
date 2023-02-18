import { FC } from "react";

interface InputBoardProps {
    type: string;
    placeholder: string;
    style: string;
    parentCallback: any; 
    list?: string;
}

const InputBoard: FC<InputBoardProps>= ({ type, placeholder, style, parentCallback, list }) => {
  const onTrigger = (event: any) => {
    parentCallback(event.target.value);
    event.preventDefault();
  };
  return (
    <>
      <input
        onChange={onTrigger}
        type={type}
        placeholder={placeholder}
        className={style}
        list={list}
      />
      {list ? (
        <datalist id={list}>
          <option value="ООО" />
          <option value="АО" />
          <option value="ЗАО" />
        </datalist>
      ) : null}
    </>
  );
};

export default InputBoard;
