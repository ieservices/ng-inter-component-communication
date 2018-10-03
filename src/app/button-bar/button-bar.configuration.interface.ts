export interface IButtonBarConfiguration {
  name: string;
  config: {
    saveButton: {
      title: string,
      show: boolean
    },
    saveAndCloseButton: {
      title: string,
      show: boolean
    },
    cancelButton: {
      title: string,
      show: boolean
    }
  };
}

