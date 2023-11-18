export default function About(props) {
    return (
      <>
        <h2>About Us</h2>
        <p>I started this website after watching <a target="_blank" href="https://www.youtube.com/watch?v=qwhMyVVnmKM">this YouTube video</a> on NextJS</p>
        <p>Lookup Next Layout for better way to do headers and footers</p>
        <p>Welcome to this amazing about page. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore officiis atque voluptas, quas, repellendus cum, magnam a alias unde reiciendis voluptates aliquam maxime laborum? Quae omnis eius impedit et?</p>
        <p>I have {props.repoCount} public repos on GitHub.</p>
      </>
    )
  }
  
  export async function getStaticProps() {
    const response = await fetch("https://api.github.com/users/tombandy")
    const data = await response.json()
  
    return {
      props: {
        repoCount: data.public_repos
      },
      revalidate: 10
    }
  }