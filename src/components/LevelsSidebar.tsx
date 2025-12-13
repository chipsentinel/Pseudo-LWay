import { Level } from '../features/levels/levels';
import { UD01_LEVELS } from '../features/levels/ud01';

interface LevelsSidebarProps {
  onSelectLevel?: (level: Level) => void;
  completedLevels?: Record<string, boolean>;
  currentLevelId?: string;
}

export function LevelsSidebar({ onSelectLevel, completedLevels = {}, currentLevelId }: LevelsSidebarProps) {
  return (
    <div className="levels-sidebar">
      <h2>📚 UD01: Fundamentos</h2>

      <div className="curriculum-section">
        <ul className="levels-list">
          {UD01_LEVELS.map((lvl, idx) => (
            <li key={lvl.id}>
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