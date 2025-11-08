function FriendsList() {
  const friends = ["mari", "nino", "gio"];

  return (
    <div>
      {friends.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}
export default FriendsList