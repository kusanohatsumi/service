export default function Login() {
  return (
    <>
      <h2>ユーザーネーム</h2>
      <h2>ID</h2>

      <Container>
        <div className="flex flex-col items-center">          
          {/* ボタン */}
          <FlexCenter className=" flex-col">
            <Button className="mb-4">新規登録</Button>
            <Button_bg>
              <Button__border>ログイン</Button__border>
            </Button_bg>
          </FlexCenter>
        </div>
      </Container>
    </>
  );
}
