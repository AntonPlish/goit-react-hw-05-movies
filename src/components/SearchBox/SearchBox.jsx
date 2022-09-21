import { Wrapper, Input, Button, Icon } from "./SearchBox.styled";

export const SearchBox = ({ onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();

    onSearch(event.currentTarget.elements.query.value);
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Input
          type="text"
          name="query"
        />
        <Button type="submit"><Icon></Icon>Search</Button>
      </Wrapper>
    </form>
  );
};