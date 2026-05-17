const params = new URLSearchParams(window.location.search);
const projectId = params.get("project") || "07";
const project = window.RECRUIT_PROJECTS?.[projectId] || window.RECRUIT_PROJECTS?.["07"];

const setText = (id, text) => {
  const node = document.getElementById(id);
  if (node) node.textContent = text;
};

const renderParagraphs = (id, paragraphs) => {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = "";
  paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    node.appendChild(p);
  });
};

const renderGoals = (id, goals) => {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = "";
  goals.forEach((goal) => {
    const li = document.createElement("li");
    li.textContent = goal;
    node.appendChild(li);
  });
};

const renderMeta = (id, meta) => {
  const node = document.getElementById(id);
  if (!node) return;
  node.innerHTML = "";
  Object.entries(meta).forEach(([label, value]) => {
    const item = document.createElement("div");
    const key = document.createElement("span");
    const val = document.createElement("strong");
    key.textContent = label;
    val.textContent = value;
    item.append(key, val);
    node.appendChild(item);
  });
};

if (project) {
  document.title = `${project.title}｜生物探索团队本科生招募`;
  setText("project-title", project.title);
  setText("project-lead", project.lead);
  renderMeta("project-meta", project.meta);
  renderParagraphs("project-question", project.question);
  renderParagraphs("project-meaning", project.meaning);
  renderGoals("project-goals", project.goals);

  const mdLink = document.getElementById("project-md");
  if (mdLink) mdLink.href = project.md;
}
