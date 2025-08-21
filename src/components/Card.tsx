// Card.tsx
interface ICard {
  children: React.ReactNode;
}

export const Card = ({ children }: ICard) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      {children}
    </div>
  );
};