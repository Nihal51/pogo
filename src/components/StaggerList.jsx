export default function StaggerList({ items }) {
  return (
    <div className='stagger-list'>
      {items.map((item, idx) => (
        <div key={item} style={{ animationDelay: `${idx * 80}ms` }}>
          {item}
        </div>
      ))}
    </div>
  );
}
