export default function Header() {
  return (
    <header
      className="flex justify-between items-center px-2 py-5
      bg-black
    "
    >
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center gap-[20px]">
        <li className="font-normal text-xs">로그인</li>
        <li className="font-normal text-xs">회원가입</li>
        <li className="font-normal text-xs">내클래스</li>
      </ul>
    </header>
  );
}
