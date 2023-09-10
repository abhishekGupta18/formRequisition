import React, { createContext, useContext, useState } from "react";
type ContextValue = {
  state: typeof initialValues;
  setState: React.Dispatch<React.SetStateAction<typeof initialValues>>;
};
export type InitialValuesType = {
  requisitionDetails: {
    gender: string;
    noOfOpenings: number;
    requisitionTitle: string;
    urgency: string;
  };
  jobDetails: {
    jobDetails: string;
    jobLocation: string;
    jobTitle: string;
  };
  interviewSettings: {
    interviewDuration: string;
    interviewLanguage: string;
    interviewMode: string;
  };
};

const initialValues: InitialValuesType = {
  requisitionDetails: {
    gender: "",
    noOfOpenings: 0,
    requisitionTitle: "",
    urgency: "",
  },
  jobDetails: {
    jobDetails: "",
    jobLocation: "",
    jobTitle: "",
  },
  interviewSettings: {
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
  },
};
``


// const initialValues = {
//   requisitionDetails: {
//     gender: "",
//     noOfOpenings: 0,
//     requisitionTitle: "",
//     urgency: "",
//   },
//   jobDetails: {
//     jobDetails: "",
//     jobLocation: "",
//     jobTitle: "",
//   },
//   interviewSettings: {
//     interviewDuration: "",
//     interviewLanguage: "",
//     interviewMode: "",
//   },
// };
const DataContext = createContext<ContextValue | null>(null);

// const DataContext = createContext<{
//   state: typeof initialValues;
//   setState: React.Dispatch<React.SetStateAction<typeof initialValues>>;
// } | null>(null);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<typeof initialValues>(initialValues);

  return (
    <DataContext.Provider value={{ state, setState }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
