function Footer({ id }: { id: string }) {
  return (
    <div id={id} className="bg-primary text-white p-2 grid">
      {/* footer */}

      <p className="text-center">© 2024 My Template</p>
    </div>
  );
}

export default Footer;
