import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Chalana Wijesingha — All Rights Reserved
    </footer>
  );
}
