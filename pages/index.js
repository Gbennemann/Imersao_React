function GlobalStyles() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}</style>
  )
}
function Title(props) {
  console.log(props)
  const Tag = props.tag
  return (
    <>
      <Tag>{props.children || 'Isso é um teste'} </Tag>
      <style jsx>
        {`
          ${Tag} {
            color: red;
          }
          h1 {
            color: green;
          }
        `}
      </style>
    </>
  )
}
export default function Home() {
  return (
    <div>
      <GlobalStyles />
      <Title tag="h1" />
      <Title tag="h2">Isso é um teste 3</Title>
      <h2>Boas vindas de volta!</h2>
    </div>
  )
}
