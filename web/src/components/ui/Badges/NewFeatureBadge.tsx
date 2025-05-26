import { Crown, Sparkles } from 'lucide-react';
import './NewFeatureBadge.scss';

type BadgeSize = 'xsmall' | 'small' | 'medium';

interface NewBadgeProps {
  size?: BadgeSize;
}

const sizeStyles: Record<
  BadgeSize,
  {
    wrapper: string;
    icon: string;
    text: string;
    decorative: {
      ping: string;
      pulse: string;
    };
  }
> = {
  xsmall: {
    wrapper: 'px-1.5 py-0.5 text-[9px]',
    icon: 'w-2 h-2',
    text: 'tracking-wide',
    decorative: {
      ping: 'w-0.5 h-0.5',
      pulse: 'w-0.5 h-0.5',
    },
  },
  small: {
    wrapper: 'px-2 py-0.5 text-[10px]',
    icon: 'w-2.5 h-2.5',
    text: 'tracking-wide',
    decorative: {
      ping: 'w-1 h-1',
      pulse: 'w-0.5 h-0.5',
    },
  },
  medium: {
    wrapper: 'px-3 py-1 text-xs',
    icon: 'w-3 h-3',
    text: 'tracking-wide',
    decorative: {
      ping: 'w-1.5 h-1.5',
      pulse: 'w-1 h-1',
    },
  },
};

export const NewFeatureBadge: React.FC<NewBadgeProps> = ({
  size = 'small',
}) => {
  const styles = sizeStyles[size];

  return (
    <span
      className={`relative inline-flex items-center font-medium bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] text-white rounded-full group hover:scale-105 transition-transform duration-300 ease-out cursor-pointer select-none -translate-y-px ${styles.wrapper}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#921d7f] via-[#c1124a] to-[#ff0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      <span className="absolute -inset-1 bg-gradient-to-r from-[#921d7f]/30 via-[#c1124a]/30 to-[#ff0000]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="absolute inset-0 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform" />
      </span>

      <div className="relative flex items-center gap-0.5">
        <Crown
          className={`${styles.icon} animate-[bounce_2s_ease-in-out_infinite]`}
        />
        <span className="relative">
          <span className={`relative z-10 ${styles.text}`}>new</span>
          <span className="absolute -bottom-px left-0 w-full h-[1px] bg-white/40 rounded blur-[0.5px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        </span>
        <Sparkles
          className={`${styles.icon} animate-[pulse_2s_ease-in-out_infinite]`}
        />
      </div>

      <span
        className={`absolute top-0 right-0 -mr-0.5 -mt-0.5 ${styles.decorative.ping} rounded-full bg-white/90 animate-ping`}
      />
      <span
        className={`absolute bottom-0 left-0 -ml-0.5 -mb-0.5 ${styles.decorative.pulse} rounded-full bg-white/80 animate-pulse`}
      />
    </span>
  );
};
