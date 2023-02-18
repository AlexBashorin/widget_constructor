import { FC, createContext, useState } from 'react';

interface CompleteWidgetProviderProps {
    children: any;
}

const CompleteWIdgetContext = createContext({
    default: "no content"
});

export const CompleteWidgetProvider: FC<CompleteWidgetProviderProps> = ({ children }) => {
  const [clickAmount, setClickAmount] = useState(0);
  const increment = () => setClickAmount((amount) => amount + 1);

  let completedWidget = {
    default: "",
  }

  return (
    <CompleteWIdgetContext.Provider value={completedWidget}>
      {children}
    </CompleteWIdgetContext.Provider>
  );
};

export default CompleteWidgetProvider;