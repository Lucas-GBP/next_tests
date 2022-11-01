import { FC } from "react";

const ImportantComponent:FC<{'data-testid':string}> = (props) => {
    return <>
        <h1 className="text-2xl underline p-3" data-testid={props['data-testid']}>Hello World!</h1>
    </>;
}
export default ImportantComponent;
