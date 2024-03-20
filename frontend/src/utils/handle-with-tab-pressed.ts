
export interface IHandleWithTabPressed {
  id: string
}

export const handleWithTabPressed = ({
  id
}: IHandleWithTabPressed) => {

  const textbox = document.getElementById(id) as HTMLTextAreaElement;

  textbox.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textbox.selectionStart!;
      const end = textbox.selectionEnd!;

      // Set textarea value with tab insertion
      textbox.value = `${textbox.value.substring(0, start)}\t${textbox.value.substring(end)}`;

      // Update caret position
      textbox.selectionStart = textbox.selectionEnd = start + 1;
    }
  });

}
