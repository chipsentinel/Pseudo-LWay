
// Importa el tipo de nivel y la lista de niveles de la unidad didáctica 01.
import { Level } from '../features/levels/levels';
import { UD01_LEVELS } from '../features/levels/ud01';


// Props del componente LevelsSidebar.
// - onSelectLevel: callback al seleccionar un nivel.
// - completedLevels: mapa de niveles completados.
// - currentLevelId: id del nivel actualmente seleccionado.
interface LevelsSidebarProps {
  onSelectLevel?: (level: Level) => void;
  completedLevels?: Record<string, boolean>;
  currentLevelId?: string;
}


/**
 * Sidebar para seleccionar niveles.
 * Permite navegar entre los diferentes niveles del editor y muestra el progreso.
 */
export function LevelsSidebar({ onSelectLevel, completedLevels = {}, currentLevelId }: LevelsSidebarProps) {
  return (
    <div className="levels-sidebar">
      {/* Título de la unidad didáctica */}
      <h2>📚 UD01: Fundamentos</h2>

      <div className="curriculum-section">
        {/* Lista de niveles disponibles */}
        <ul className="levels-list">
          {UD01_LEVELS.map((lvl, idx) => (
            <li key={lvl.id}>
              {/* Botón para cada nivel. El nivel activo se resalta y los completados muestran un check. */}
              <button
                className={`btn btn-outline level-item ${completedLevels[lvl.id] ? 'completed' : ''} ${currentLevelId === lvl.id ? 'active' : ''}`}
                onClick={() => onSelectLevel && onSelectLevel(lvl)}
              >
                <span className="level-number">N{idx + 1}</span>
                <span className="level-title">{lvl.title}</span>
                {completedLevels[lvl.id] && <span className="level-check">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}